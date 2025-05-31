<template>
    <div class="percentage-graph">
        <div class="percentage-graph__bar" v-for="i in 10" :key="i" :class="`percentage-graph__bar--${getFill(i)} ${getGap(i) ? 'percentage-graph__bar--gap' : ''} ${props.size == 'large' ? 'percentage-graph__bar--large' : ''}`">
            <div class="percentage-graph__bar-fill"></div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    percentage: {
        type: Number,
        required: true
    },
    gap: {
        type: Number,
        default: 0
    },
    size: {
        type: String,
        default: 'medium'
    }
})

const getFill = (i) => {
    let fill = 0;
    if (i <= props.percentage && (props.percentage / 10) >= (i - 1)) {
        fill = (props.percentage / 10) >= i ? 10 : props.percentage % 10;
    }
    return fill;
}

const getGap = (i) => {
    return props.gap >= (i * 10) ? true : false;
}
</script>
<style scoped lang="scss">
    .percentage-graph {
        --bar-size: var(--size-1);
        display: grid;
        grid-template-columns: repeat(5, var(--bar-size));
        grid-template-rows: repeat(2, var(--bar-size));
        gap: var(--space-3xs);
        justify-content: flex-end;
        padding-top: var(--space-3xs);
        @media (max-width: 768px) {
            justify-content: flex-start;
        }
    }

    .percentage-graph__bar {
        position: relative;
        overflow: hidden;
        width: var(--bar-size);
        height: var(--bar-size);
        background-color: var(--secondary-color);
    }

        .percentage-graph__bar--gap {
            border: 2px solid var(--primary-color);
        }

        .percentage-graph__bar--large {
            --bar-size: var(--size-6);
            border-width: 4px;
        }

        .percentage-graph__bar-fill {
            position: absolute;
            top: 0;
            left: 0;
            width: 142%;
            height: 142%;
            background-color: var(--primary-color);
            transform-origin: center;
            transform: rotate(45deg) translateX(-21%);
        }

        .percentage-graph__bar--0 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(100%);
            }
        }

        .percentage-graph__bar--1 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(90%);
            }
        }

        .percentage-graph__bar--2 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(80%);
            }
        }

        .percentage-graph__bar--3 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(70%);
            }
        }   

        .percentage-graph__bar--4 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(60%);
            }
        }                   

        .percentage-graph__bar--5 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(50%);
            }
        }

        .percentage-graph__bar--6 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(40%);
            }
        }

        .percentage-graph__bar--7 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(30%);
            }
        }


        .percentage-graph__bar--8 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(20%);
            }
        }

        .percentage-graph__bar--9 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(10%);
            }
        }

        .percentage-graph__bar--10 {
            .percentage-graph__bar-fill {
                transform: rotate(45deg) translateX(-21%) translateY(0%);
            }
        }  
</style>
