"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

interface TimeSelectProps {
  defaultValue?: string;
}

const MONTH_OPTIONS = [
  { value: "1", label: "Janeiro" },
  { value: "2", label: "Fevereiro" },
  { value: "3", label: "Março" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Maio" },
  { value: "6", label: "Junho" },
  { value: "7", label: "Julho" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const TimeSelect = ({ defaultValue = "1" }: TimeSelectProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleMonthChange = (month: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("month", month);
    router.push(`/dashboard?${params.toString()}`);
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={handleMonthChange}>
      <SelectTrigger className="w-[150px] rounded-full">
        <SelectValue placeholder="Selecione um mês" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
