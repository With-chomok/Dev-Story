import Title from '@/component/Title/page';
import Link from 'next/link';
import React from 'react';

const About= () => {
    return (
        <div>
            <Title>This is about us</Title>
            <Link href={'/about/contact'} className='btn btn-primary text-2xl font-bold'>Contact</Link>
            <Link href={'/about/team'} className='btn btn-primary text-2xl font-bold'>Teams</Link>

        </div>
    );
};

export default About;