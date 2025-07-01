import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UIEventBus from '../EventBus';
import { Easing } from '../Animation';

// Use public paths for SVGs
const volumeOn = "/textures/UI/volume_on.svg";
const volumeOff = "/textures/UI/volume_off.svg";

interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

interface MuteToggleProps {}

const MuteToggle: React.FC<MuteToggleProps> = ({}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [muted, setMuted] = useState(false);
    const [blockEvents, setBlockEvents] = useState(true);

    const onMouseDownHandler = useCallback(
        (event) => {
            setIsActive(true);
            event.preventDefault();
            setMuted(!muted);
        },
        [muted]
    );

    const iconSize = window.innerWidth < 768 ? 8 : 10;

    const onMouseUpHandler = useCallback(() => {
        setIsActive(false);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setBlockEvents(false);
        }, 100);
    }, []);

    useEffect(() => {
        if (!blockEvents) {
            UIEventBus.dispatch('muteToggle', muted);
        }
    }, [muted, blockEvents]);

    return (
        <div style={styles.wrapper}>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={styles.container}
                onMouseDown={onMouseDownHandler}
                onMouseUp={onMouseUpHandler}
                className="icon-control-container"
                id="prevent-click"
            >
                <motion.img
                    id="prevent-click"
                    src={muted ? volumeOff : volumeOn}
                    alt={muted ? "Volume Off" : "Volume On"}
                    style={{ opacity: isActive ? 0.2 : isHovering ? 0.8 : 1 }}
                    height={iconSize}
                    width={iconSize}
                    animate={
                        isActive
                            ? 'active'
                            : isHovering
                            ? 'hovering'
                            : 'default'
                    }
                    variants={iconVars}
                />
            </div>
        </div>
    );
};

const iconVars = {
    hovering: {
        opacity: 0.8,
        transition: {
            duration: 0.1,
            ease: 'easeOut',
        },
    },
    active: {
        scale: 0.8,
        opacity: 0.5,
        transition: {
            duration: 0.1,
            ease: Easing.expOut,
        },
    },
    default: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
};

const styles: StyleSheetCSS = {
    container: {
        background: 'black',
        textAlign: 'center',
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
};

export default MuteToggle;