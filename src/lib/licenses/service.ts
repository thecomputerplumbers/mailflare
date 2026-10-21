import type { LicenseEntitlements } from "./types";

// Self-hosted build: every feature is available and accounts are unlimited.
// Upstream gates these behind Pro/Team license keys; this fork removes the
// license system and keeps this function as the single entitlement chokepoint
// so the call sites stay identical to upstream.
const SELF_HOSTED_ENTITLEMENTS: LicenseEntitlements = {
	plan: "self-hosted",
	canCustomizeBranding: true,
	canManageAccounts: true,
	canShareMailboxes: true,
	accountSeatLimit: null,
	canForwardEmail: true,
};

export async function getLicenseEntitlements(env: CloudflareEnv): Promise<LicenseEntitlements> {
	void env;
	return SELF_HOSTED_ENTITLEMENTS;
}
