import { Button, Input, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PermissionManager } from "@/components";
import { pickImage } from "@/services/cameraService";

import { AddPhoto } from "./components";

type ProfileDetails = {
  name: string;
  username: string;
  country: string;
  state: string;
  city: string;
  photoUri?: string;
};

type ProfileScreenProps = {
  initialName?: string;
  onDone: (profile: ProfileDetails) => void;
};

export function ProfileScreen({
  initialName = "",
  onDone,
}: ProfileScreenProps) {
  const { colors, spacing } = useTheme();
  const [photoUri, setPhotoUri] = useState<string | undefined>();
  const [name, setName] = useState(initialName);
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  async function handleAddPhoto() {
    try {
      const photoUri = await pickImage();
      setPhotoUri(photoUri);
    } catch (error) {
      console.error((error as Error).message);
    }
  }

  const canSubmit =
    name.trim().length > 0 &&
    username.trim().length > 0 &&
    country.trim().length > 0 &&
    state.trim().length > 0 &&
    city.trim().length > 0;

  function submit() {
    if (!canSubmit) {
      return;
    }

    onDone({
      name: name.trim(),
      username: username.trim().replace(/^@/, ""),
      country: country.trim(),
      state: state.trim(),
      city: city.trim(),
      photoUri,
    });
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      permissionDescription="Permitir acesso à biblioteca de fotos"
    >
      <Screen
        scroll
        edges={["top", "bottom"]}
        keyboardShouldPersistTaps="handled"
        style={{ paddingHorizontal: spacing[6] }}
      >
        <View style={styles.content}>
          <View style={{ gap: spacing[1], marginBottom: spacing[8] }}>
            <Text variant="label" style={{ color: colors.lime }}>
              CONFIGURAÇÃO INICIAL
            </Text>
            <Text variant="header">Seu perfil</Text>
            <Text variant="subtitle">
              Personalize como você aparecerá para outros atletas
            </Text>
          </View>

          <View style={{ marginBottom: spacing[8] }}>
            <AddPhoto
              name={name || "Perfil"}
              uri={photoUri}
              onPress={handleAddPhoto}
            />
          </View>

          <View style={{ gap: spacing[4] }}>
            <Input
              label="Nome"
              value={name}
              onChangeText={setName}
              placeholder="Seu nome"
              autoCapitalize="words"
              autoComplete="name"
              textContentType="name"
            />
            <Input
              label="Username"
              value={username}
              onChangeText={(value) => setUsername(value.replace(/\s/g, ""))}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="username"
              textContentType="username"
              leftIcon={
                <Text variant="paragraph" style={{ color: colors.muted }}>
                  @
                </Text>
              }
            />
            <Input
              label="País"
              value={country}
              onChangeText={setCountry}
              placeholder="Seu país"
            />
            <Input
              label="Estado / Região"
              value={state}
              onChangeText={setState}
              placeholder="Estado ou região"
            />
            <Input
              label="Cidade"
              value={city}
              onChangeText={setCity}
              placeholder="Sua cidade"
            />
          </View>

          <View style={{ marginTop: "auto", paddingTop: spacing[6] }}>
            <Button full disabled={!canSubmit} onPress={submit}>
              Começar jornada
            </Button>
          </View>
        </View>
      </Screen>
    </PermissionManager>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
});
