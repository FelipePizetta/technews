import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type NotificationProps = {
    showNotification: boolean;
}

const AlertSucess = ({ showNotification }: NotificationProps) => {
    const SucessVariants = {
        hidden: {
            y: '-100%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        }
    };

    const t = useTranslations();

    return (
        <motion.div initial='hidden' className="bg-malachite text-white absolute top-0 px-4 py-2 rounded-lg mt-16 gap-3 shadow-sucess antialiased select-none" animate={showNotification ? 'visible' : 'hidden'} variants={SucessVariants}>
            <label className='flex flex-row justify-center items-center text-sm font-sans font-semibold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  fill="currentColor" className="inline-block h-5 w-5 shrink-0 transition-transform motion-reduce:transition-none mr-3 translate-y-px" aria-hidden="true"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>{t('Alert.sucess')}</label>
        </motion.div>
    );
}

export default AlertSucess;