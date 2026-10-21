export type LicensePlan = "self-hosted";

export type LicenseEntitlements = {
	plan: LicensePlan;
	canCustomizeBranding: boolean;
	canManageAccounts: boolean;
	/** Shared inboxes, mailbox sharing and booking hosts. */
	canShareMailboxes: boolean;
	/** Maximum enabled accounts; null is unlimited. */
	accountSeatLimit: number | null;
	canForwardEmail: boolean;
};
