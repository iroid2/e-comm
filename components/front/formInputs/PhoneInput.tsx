'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {   countriesList } from '@/countries';

const countries = [
  { value: 'us', label: 'United States', phoneCode: '+1', flag: '🇺🇸' },
  { value: 'gb', label: 'United Kingdom', phoneCode: '+44', flag: '🇬🇧' },
  { value: 'ca', label: 'Canada', phoneCode: '+1', flag: '🇨🇦' },
  { value: 'au', label: 'Australia', phoneCode: '+61', flag: '🇦🇺' },
  { value: 'de', label: 'Germany', phoneCode: '+49', flag: '🇩🇪' },
  { value: 'fr', label: 'France', phoneCode: '+33', flag: '🇫🇷' },
  { value: 'in', label: 'India', phoneCode: '+91', flag: '🇮🇳' },
  { value: 'jp', label: 'Japan', phoneCode: '+81', flag: '🇯🇵' },
];
// const countries= countriesList
type PhoneInputProps = {
  label: string;
  register: any;
  name: string;
  errors?: Record<string, any>;
  placeholder?: string;
};

export default function PhoneInput({
  label,
  register,
  name,
  errors,
  placeholder,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  return (
    <div className="relative flex flex-col w-full mt-7">
      <label className="text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex w-full items-center">
        <Select
          defaultValue={selectedCountry.value}
          onValueChange={(value) => {
            const country = countries.find((c) => c.value === value);
            if (country) setSelectedCountry(country);
          }}
        >
          <SelectTrigger className="absolute left-0 w-[90px] border-r-0 rounded-r-none bg-transparent focus:ring-0 focus:ring-offset-0">
            <SelectValue>
              <div className="flex items-center gap-2">
                <img
                  src={`https://flagcdn.com/w20/${selectedCountry.value}.png`}
                  width="20"
                  height="15"
                  alt={`${selectedCountry.label} flag`}
                  className="object-contain"
                />
                <span className="text-sm text-muted-foreground">
                  {selectedCountry.phoneCode}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                <div className="flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/w20/${country.value}.png`}
                    width="20"
                    height="15"
                    alt={`${country.label} flag`}
                    className="object-contain"
                  />
                  <span>{country.label}</span>
                  <span className="text-muted-foreground ml-auto">
                    {country.phoneCode}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="tel"
          {...register(name)}
          placeholder={placeholder || '201-555-0123'}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="pl-[100px]"
        />
      </div>
      {errors?.[name] && (
        <p className="text-sm text-red-500 mt-1">
          {errors[name]?.message || 'This field is required'}
        </p>
      )}
    </div>
  );
}
