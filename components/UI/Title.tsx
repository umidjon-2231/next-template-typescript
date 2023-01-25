import React, {FC, memo} from 'react';
import Head from "next/head";

interface TitleProps {
    name: string
}

const Title: FC<TitleProps> = memo<TitleProps>(({name}) => {
    return (
        <Head>
            <title>{name}</title>
        </Head>
    );
});

Title.displayName = "Title"

export default Title;