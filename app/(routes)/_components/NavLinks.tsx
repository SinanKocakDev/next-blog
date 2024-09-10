 "use client"

import React from 'react'
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinksProps{
    IsActive:boolean;
    label:string;
    route:string;
}

const NavLinks = ({ IsActive, label, route }: NavLinksProps) => {
    return (
      <Button asChild
        variant="ghost"
        className={cn(" rounded-xl",
          IsActive && " dark:text-gray rounded-xl"
        )}
      >
        <Link href={route}>
          <div className={cn("flex items-center gap-2 text-sm ",
            IsActive && "border-b-2  "
          )}>
           
            <p>{label}</p>
          </div>
        </Link>
      </Button>
    );
  };

export default NavLinks