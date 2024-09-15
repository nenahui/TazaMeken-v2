import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MerchBackButton } from '@/features/merch/merchProducts/merchBackButton/merchBackButton';
import { cn } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MerchPay: React.FC = () => {
  const [date, setDate] = React.useState<Date>();
  const navigate = useNavigate();

  return (
    <div
      className={
        'flex flex-col gap-6 max-w-md mb-10 absolute w-full top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4'
      }
    >
      <MerchBackButton mb={'1'} onClick={() => navigate(-1)} />
      <div className='grid w-full  items-center gap-1.5'>
        <Label htmlFor='card_number'>Номер карты</Label>
        <Input type='card_number' id='card_number' placeholder='Введите номер карты...' />
      </div>

      <div className='grid w-full  items-center gap-1.5'>
        <Label htmlFor='fio'>ФИО</Label>
        <Input type='fio' id='fio' placeholder='Введите ФИО...' />
      </div>

      <div className={'flex justify-between gap-6'}>
        <div className='grid items-center gap-1.5 w-full'>
          <Label htmlFor='date'>Дата</Label>
          <Popover>
            <PopoverTrigger asChild className={'w-full'}>
              <Button
                variant={'outline'}
                className={cn('w-full justify-start font-normal', !date && 'text-muted-foreground')}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {date ? format(date, 'PPP') : <span>Выберите дату</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar id={'date'} mode='single' selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className='grid items-center gap-1.5'>
          <Label htmlFor='cvv'>CVV</Label>
          <InputOTP id={'cvv'} maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <Button className={'py-6 text-[17px]'}>Оплатить</Button>
    </div>
  );
};
