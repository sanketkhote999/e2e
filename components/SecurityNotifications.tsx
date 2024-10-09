import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SecurityNotifications() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Security & Notification</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="two-factor">Two Factor Authentication</Label>
            <p className="text-sm text-muted-foreground">
              We recommend enabling two factor authentication to provide an extra layer of security to MyAccount
            </p>
          </div>
          <Switch id="two-factor" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="whatsapp">WhatsApp Notification</Label>
            <p className="text-sm text-muted-foreground">
              To receive important updates regarding MyAccount on WhatsApp, enable this feature
            </p>
          </div>
          <Switch id="whatsapp" />
        </div>
      </div>
    </div>
  );
}