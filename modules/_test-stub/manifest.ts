export default {
  name: '_test-stub',
  version: '0.1.0',
  description: 'Phase-1 test stub used to validate the Stax install CLI. Not for production.',
  tier: 'free' as const,
  requires: [],
  navItems: [{ label: 'Test Stub', href: '/_test-stub' }],
  envVars: [],
  migrations: [],
} satisfies {
  name: string;
  version: string;
  description: string;
  tier: 'free' | 'paid';
  requires: string[];
  navItems: Array<{ label: string; href: string; icon?: string }>;
  envVars: string[];
  migrations: string[];
};
