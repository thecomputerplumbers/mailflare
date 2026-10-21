import type { AppDatabase } from "@/db";

// Self-hosted build: mailbox sharing is always enabled (upstream requires a Team license).
export async function isTeamMailboxSharingEnabled(db: AppDatabase): Promise<boolean> {
	void db;
	return true;
}
