import { Icon } from '@iconify/react';
import DateMaker from '@lib/date-maker';
import * as React from 'react';

interface InputProps {
  inputHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function BirthDayInput({ inputHandler }: InputProps) {
  const [optionData, setOptionData] = React.useState({
    days: [] as number[],
    months: [] as string[],
    years: [] as number[],
  });
  React.useEffect(() => {
    setOptionData({
      ...optionData,
      days: DateMaker.createDays(),
      months: DateMaker.createMonths(),
      years: DateMaker.createYears(),
    });
  }, []);
  return (
    <div className="flex gap-2 text-[12px] items-center mx-auto mt-2 relative">
      <Icon
        icon="ic:outline-keyboard-arrow-down"
        className="absolute top-1/2 -translate-y-1/2 left-[55px] text-lg text-slate-500"
      />
      <select
        id="month"
        className="appearance-none w-[78px] h-[36px] border border-lineGrey text-slate-500 px-2 rounded-[4px]"
        title="Bulan:"
        onChange={inputHandler}
      >
        {optionData.months.map((month, index) => (
          <option key={`option-month-${index}`} title={`${month}`} value={month}>
            {month}
          </option>
        ))}
      </select>
      <Icon
        icon="ic:outline-keyboard-arrow-down"
        className="absolute top-1/2 -translate-y-1/2 left-[110px] text-lg text-slate-500"
      />
      <select
        id="day"
        className="appearance-none w-[47px] h-[36px] border border-lineGrey text-slate-500 px-2 rounded-[4px]"
        title="Hari:"
        onChange={inputHandler}
      >
        {optionData.days.map((day, index) => (
          <option key={`option-day-${index}`} title={`${day}`} value={day}>
            {day}
          </option>
        ))}
      </select>
      <Icon
        icon="ic:outline-keyboard-arrow-down"
        className="absolute top-1/2 -translate-y-1/2 left-[180px] text-lg text-slate-500"
      />
      <select
        id="year"
        className="appearance-none w-[60px] h-[36px] border border-lineGrey text-slate-500 px-2 rounded-[4px]"
        title="Tahun:"
        onChange={inputHandler}
      >
        {optionData.years.map((year, index) => (
          <option key={`option-day-${index}`} title={`${year}`} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
