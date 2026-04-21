import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 147,
                color: '#00CC22', // основной цвет (track и thumb)
                height: 4,
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B', // цвет неактивной части
                    opacity: 1,
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                    '&::before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        backgroundColor: 'currentColor',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange