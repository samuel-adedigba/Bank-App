// src/pages/SettingsPage.tsx
import React, { useState } from "react";
import EditProfileTab from "../../pages/Users/Settings/EditProfileTab";
import PreferenceSettingsTab from "../../pages/Users/Settings/PreferenceSettingsTab";
import SecuritySettingsTab from "../../pages/Users/Settings/SecuritySettingsTab";
import { ToggleTabs } from "../UI/ToggleTabs";

const TAB_CONFIG = [
  { key: "edit", label: "Edit Profile" },
  { key: "prefs", label: "Preference" },
  { key: "secure", label: "Security" },
] as const;

// Derive the union type 'edit' | 'prefs' | 'secure'
type TabKey = (typeof TAB_CONFIG)[number]["key"];

export default function SettingsPage() {
  const [selectedKey, setSelectedKey] = useState<TabKey>("edit");

  return (
    <div className="max-w-xl mx-auto p-4 min-h-screen bg-white rounded-2xl shadow my-6">
      <ToggleTabs<TabKey>
        tabs={TAB_CONFIG} // readonly tuple now fits ReadonlyArray<…>
        selectedKey={selectedKey}
        onChange={setSelectedKey}
      />

      <div className="mt-6 p-4">
        {selectedKey === "edit" && <EditProfileTab />}
        {selectedKey === "prefs" && <PreferenceSettingsTab />}
        {selectedKey === "secure" && <SecuritySettingsTab />}
      </div>
    </div>
  );
}
