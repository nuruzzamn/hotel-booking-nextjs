'use client';

import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DashboardGoHomeBtnProps {
  className?: string;
}

const DashboardGoHomeBtn: React.FC<DashboardGoHomeBtnProps> = ({ className }) => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push('/')} variant='outline' size='icon' className={cn(`ml-auto shrink-0 ${className}`)}>
            <Home className='h-5 w-5' />
        </Button>
    );
};

export default DashboardGoHomeBtn;
