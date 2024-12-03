import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

export default function PhoneInput() {
  return (
    <div className="flex flex-col justify-center items-start gap-[6px] w-full">
        <label
        htmlFor="phone number"
        className="font-instrument font-medium text-[.875rem] leading-[20px] text-blueSeven"
        >
        Phone number
        </label>
        <div className="w-full h-[48px] gap-[6px] flex justify-center items-center py-[10px] border border-grayNine rounded-lg">
        <Select defaultValue="NGN" className="w-[87px] bg-transparent">
            <SelectTrigger className="outline-none border-0 py-[12px] pl-[16px] pr-[12px] border-r border-r-grayNine rounded-none bg-transparent text-blue font-medium w-[87px]">
            NGN
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="NGN">NGN</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
        </Select>
        <input
            type="text"
            className="outline-none bg-transparent font-instrument py-[12px] pr-[16px] placeholder:text-blueThree font-normal placeholder:font-normal text-base placeholder:text-base w-full"
            value="+234 12356 890"
            readOnly
        />
        </div>
    </div>
  
  );
}
