'use client'

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useToast } from "@/components/ui/use-toast";


export function FooterSection() {

    const { toast } = useToast()

    const onEmailClick = () => {
        toast({
            title: "Email copied succesfully ✅",
            description: "mikeguijarrodev@gmail.com copied to clipboard",
        })
        navigator.clipboard.writeText('mikeguijarrodev@gmail.com');
    }

    return (
        <div className="py-16 flex gap-4">
            <Link
                href={'https://x.com/mikeguijarro'}
                target={'_blank'}
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'rounded-full transition-all')}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
            <Link
                href={'https://www.linkedin.com/in/miguel-alejandro-guijarro-mart%C3%ADnez-6a2997180/'}
                target={'_blank'}
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'rounded-full transition-all')}>
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Link>
            <Link
                href={'https://www.instagram.com/st.mikeg'}
                target={'_blank'}
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'rounded-full transition-all')}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Button
                variant={'outline'}
                className="space-x-2"
                onClick={onEmailClick}>
                <Copy />
                <span>mikeguijarrodev@gmail.com</span>
            </Button>
        </div>
    )
}