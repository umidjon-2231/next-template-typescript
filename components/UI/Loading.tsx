import React, {FC, memo} from 'react';
import {FadeLoader} from 'react-spinners';
import Title from "./Title";
import {useAppSelector} from "@/lib/hooks/redux";

type Props = {
    active?: boolean
    opacity?: boolean
    fullScreen?: boolean
}

const Loading: FC<Props> = memo<Props>(({active = true, opacity = true, fullScreen = true}) => {
    const theme = useAppSelector(state => state.globalReducer.theme)
    if (active) {
        return (
            <div
                className={`${fullScreen ? 'fullscreen' : ''} d-flex align-items-center justify-content-center loader`}
                style={{
                    position: fullScreen ? 'fixed' : 'absolute',
                    backgroundColor: `rgba(${theme === "light" ? "242,242,242" : "0,0,0"}, ${opacity ? 0.7 : 1})`,
                }}
            >
                {!opacity ?
                    <Title name={"Loading..."}/> : ''
                }
                <FadeLoader cssOverride={{left: 25}} color={"var(--main-color)"}/>
            </div>
        );
    } else {
        return <></>
    }

});

Loading.displayName = "Loading"

export default Loading;