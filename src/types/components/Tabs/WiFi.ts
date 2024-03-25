export type WiFiEncryptionTypes = 'nopass' | 'WPA' | 'WEP';

export interface WiFiValues {
  ssid: string;
  password: string;
  encryption: WiFiEncryptionTypes;
  hidden: boolean;
}

export type WiFiEncryptionTypesWithLabel = {
  [value in WiFiEncryptionTypes]: string;
};
