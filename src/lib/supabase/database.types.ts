export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          username: string;
          avatar_url: string | null;
          country: string | null;
          region: string | null;
          city: string | null;
          timezone: string;
          lifetime_xp: number;
          level: number;
          selected_title_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          username: string;
          avatar_url?: string | null;
          country?: string | null;
          region?: string | null;
          city?: string | null;
          timezone?: string;
          lifetime_xp?: number;
          level?: number;
          selected_title_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      groups: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          description: string | null;
          visibility: Database["public"]["Enums"]["group_visibility"];
          join_policy: Database["public"]["Enums"]["group_join_policy"];
          status: Database["public"]["Enums"]["group_status"];
          timezone: string;
          starts_at: string | null;
          ends_at: string | null;
          started_at: string | null;
          ended_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name: string;
          description?: string | null;
          visibility?: Database["public"]["Enums"]["group_visibility"];
          join_policy?: Database["public"]["Enums"]["group_join_policy"];
          status?: Database["public"]["Enums"]["group_status"];
          timezone?: string;
          starts_at?: string | null;
          ends_at?: string | null;
          started_at?: string | null;
          ended_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["groups"]["Insert"]>;
      };
      checkins: {
        Row: {
          id: string;
          group_id: string;
          user_id: string;
          workout_date: string;
          status: Database["public"]["Enums"]["checkin_status"];
          caption: string | null;
          approved_at: string | null;
          approved_by: string | null;
          rejection_reason: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          group_id: string;
          user_id: string;
          workout_date: string;
          status?: Database["public"]["Enums"]["checkin_status"];
          caption?: string | null;
          approved_at?: string | null;
          approved_by?: string | null;
          rejection_reason?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["checkins"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_group_admin: {
        Args: { target_group_id: string };
        Returns: boolean;
      };
      is_group_member: {
        Args: {
          target_group_id: string;
          allowed_status?: Database["public"]["Enums"]["group_membership_status"];
        };
        Returns: boolean;
      };
    };
    Enums: {
      group_visibility: "PUBLIC" | "PRIVATE";
      group_join_policy: "OPEN" | "REQUEST_APPROVAL" | "INVITE_ONLY";
      group_status: "DRAFT" | "SCHEDULED" | "ACTIVE" | "FINISHED" | "CANCELLED";
      group_member_role: "OWNER" | "ADMIN" | "MEMBER";
      group_membership_status: "ACTIVE" | "PENDING" | "REJECTED" | "REMOVED" | "LEFT";
      media_requirement: "NONE" | "PHOTO" | "VIDEO" | "PHOTO_OR_VIDEO" | "PHOTO_AND_VIDEO";
      checkin_status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
      checkin_media_type: "PHOTO" | "VIDEO";
      checkin_media_source: "CAPTURED_IN_APP" | "IMPORTED_FROM_LIBRARY";
      checkin_moderation_action: "APPROVED" | "REJECTED";
      xp_transaction_type:
        | "GROUP_JOIN"
        | "CHECKIN_APPROVED"
        | "GROUP_FINISHED"
        | "ACHIEVEMENT"
        | "BONUS"
        | "ADMIN_ADJUSTMENT";
    };
    CompositeTypes: Record<string, never>;
  };
};
