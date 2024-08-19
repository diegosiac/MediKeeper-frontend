export interface LastActivity {
  slug: string;
  name: string;
  date: Date;
  type: "edit" | "delete" | "registration";
}
