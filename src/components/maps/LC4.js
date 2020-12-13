import * as React from "react";
import Svg, {G, Path, Text, TSpan, Rect} from "react-native-svg";

export default function LC4(props) {
    //{props.state && props.state['LC4014'] ? colors[props.state['LC4014']] : "#f4d9c6"}

    const colors = {
        good: '#F4D9C6',
        medium: '#F2B385',
        bad: '#F48E43'
    };

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={312}
            height={265}
            viewBox="0 0 312 265"
            {...props}
        >
            <G
                id="Plattegrond_4"
                data-name="Plattegrond 4"
                transform="translate(-26.213 -228.238)"
            >
                <G id="background" transform="translate(26.213 228.238)" fill="#fff">
                    <Path
                        d="M 311 264 L 1 264 L 1 131.36962890625 L 88.65541839599609 131.36962890625 L 89.65541839599609 131.36962890625 L 89.65541839599609 130.36962890625 L 89.65541839599609 1 L 222.3444976806641 1 L 222.3444976806641 130.36962890625 L 222.3444976806641 131.36962890625 L 223.3444976806641 131.36962890625 L 311 131.36962890625 L 311 264 Z"
                        stroke="none"
                    />
                    <Path
                        d="M 310 263 L 310 132.36962890625 L 223.3444976806641 132.36962890625 L 221.3444976806641 132.36962890625 L 221.3444976806641 130.36962890625 L 221.3444976806641 2 L 90.65541839599609 2 L 90.65541839599609 130.36962890625 L 90.65541839599609 132.36962890625 L 88.65541839599609 132.36962890625 L 2 132.36962890625 L 2 263 L 310 263 M 312 265 L 2.842170943040401e-14 265 L 2.842170943040401e-14 130.36962890625 L 88.65541839599609 130.36962890625 L 88.65541839599609 2.842170943040401e-14 L 223.3444976806641 2.842170943040401e-14 L 223.3444976806641 130.36962890625 L 312 130.36962890625 L 312 265 Z"
                        stroke="none"
                        fill="#2c2c2c"
                    />
                </G>
                <G id="lc4010" transform="translate(27.438 456.217)">
                    <G id="achtergrond"
                       fill={props.state && props.state['LC4010'] ? colors[props.state['LC4010']] : "#f4d9c6"}>
                        <Path
                            d="M 59.27490234375 36.521240234375 L 0.5000011920928955 36.521240234375 L 0.5000011920928955 0.5000001192092896 L 59.27490234375 0.5000001192092896 L 59.27490234375 36.521240234375 Z"
                            stroke="none"
                        />
                        <Path
                            d="M 1 1 L 1 36.021240234375 L 58.77490234375 36.021240234375 L 58.77490234375 1 L 1 1 M 0 0 L 59.77490234375 0 L 59.77490234375 37.021240234375 L 0 37.021240234375 L 0 0 Z"
                            stroke="none"
                            fill="#2c2c2c"
                        />
                    </G>
                    <Text
                        id="nummer"
                        transform="translate(29.775 24.814)"
                        fill="#222"
                        fontSize={12}
                        fontFamily="HelveticaNeue, Helvetica Neue"
                    >
                        <TSpan x={-22.68} y={0}>
                            {"LC4.010"}
                        </TSpan>
                    </Text>
                </G>
                <G id="lc4014" transform="translate(27.438 433.238)">
                    <G id="achtergrond-2" data-name="achtergrond"
                       fill={props.state && props.state['LC4014'] ? colors[props.state['LC4014']] : "#f4d9c6"}>
                        <Path
                            d="M 59.27490234375 23.50024223327637 L 0.5000030994415283 23.50024223327637 L 0.5000030994415283 0.5000020861625671 L 59.27490234375 0.5000020861625671 L 59.27490234375 23.50024223327637 Z"
                            stroke="none"
                        />
                        <Path
                            d="M 1.000003814697266 1.000001907348633 L 1.000003814697266 23.00024223327637 L 58.77490234375 23.00024223327637 L 58.77490234375 1.000001907348633 L 1.000003814697266 1.000001907348633 M 3.814697265625e-06 1.9073486328125e-06 L 59.77490234375 1.9073486328125e-06 L 59.77490234375 24.00024223327637 L 3.814697265625e-06 24.00024223327637 L 3.814697265625e-06 1.9073486328125e-06 Z"
                            stroke="none"
                            fill="#2c2c2c"
                        />
                    </G>
                    <Text
                        id="nummer-2"
                        data-name="nummer"
                        transform="translate(29.775 16.435)"
                        fill="#222"
                        fontSize={12}
                        fontFamily="HelveticaNeue, Helvetica Neue"
                    >
                        <TSpan x={-22.68} y={0}>
                            {"LC4.014"}
                        </TSpan>
                    </Text>
                </G>
                <G id="lc4044" transform="translate(115.63 228.854)">
                    <G
                        id="achtergrond-3"
                        data-name="achtergrond"
                        transform="translate(-0.418 0.384)"
                        fill={props.state && props.state['LC4044'] ? colors[props.state['LC4044']] : "#f4d9c6"}
                        stroke="#2c2c2c"
                        strokeWidth={1}
                    >
                        <Rect width={134} height={131.3} stroke="none"/>
                        <Rect x={0.5} y={0.5} width={133} height={130.3} fill="none"/>
                    </G>
                    <Text
                        id="nummer-3"
                        data-name="nummer"
                        transform="translate(64.582 72.536)"
                        fill="#222"
                        fontSize={17}
                        fontFamily="HelveticaNeue, Helvetica Neue"
                    >
                        <TSpan x={-32.13} y={0}>
                            {"LC4.044"}
                        </TSpan>
                    </Text>
                </G>
                <G id="lc4024" transform="translate(26.854 358.604)">
                    <G id="achtergrond-4" data-name="achtergrond"
                       fill={props.state && props.state['LC4024'] ? colors[props.state['LC4024']] : "#f4d9c6"}>
                        <Path
                            d="M 89.5 48.15635299682617 L 0.5 48.15635299682617 L 0.5 0.5 L 89.5 0.5 L 89.5 48.15635299682617 Z"
                            stroke="none"
                        />
                        <Path
                            d="M 1 1 L 1 47.65635299682617 L 89 47.65635299682617 L 89 1 L 1 1 M 0 0 L 90 0 L 90 48.65635299682617 L 0 48.65635299682617 L 0 0 Z"
                            stroke="none"
                            fill="#2c2c2c"
                        />
                    </G>
                    <Text
                        id="nummer-4"
                        data-name="nummer"
                        transform="translate(44.359 30.634)"
                        fill="#222"
                        fontSize={17}
                        fontFamily="HelveticaNeue, Helvetica Neue"
                    >
                        <TSpan x={-32.13} y={0}>
                            {"LC4.024"}
                        </TSpan>
                    </Text>
                </G>
                <G id="lc4050" transform="translate(247.241 358.604)">
                    <G
                        id="achtergrond-5"
                        data-name="achtergrond"
                        transform="translate(0.271)"
                        fill={props.state && props.state['LC4050'] ? colors[props.state['LC4050']] : "#f4d9c6"}
                    >
                        <Path
                            d="M 89.5 48.15635299682617 L 0.5 48.15635299682617 L 0.5 0.5 L 89.5 0.5 L 89.5 48.15635299682617 Z"
                            stroke="none"
                        />
                        <Path
                            d="M 1 1 L 1 47.65635299682617 L 89 47.65635299682617 L 89 1 L 1 1 M 0 0 L 90 0 L 90 48.65635299682617 L 0 48.65635299682617 L 0 0 Z"
                            stroke="none"
                            fill="#2c2c2c"
                        />
                    </G>
                    <Text
                        id="nummer-5"
                        data-name="nummer"
                        transform="translate(45.271 30.634)"
                        fill="#222"
                        fontSize={17}
                        fontFamily="HelveticaNeue, Helvetica Neue"
                    >
                        <TSpan x={-32.13} y={0}>
                            {"LC4.050"}
                        </TSpan>
                    </Text>
                </G>
                <G id="lc4064" transform="translate(246.941 432.869)">
                    <G
                        id="achtergrond-6"
                        data-name="achtergrond"
                        transform="translate(0.271 0.369)"
                        fill={props.state && props.state['LC4064'] ? colors[props.state['LC4064']] : "#f4d9c6"}
                        stroke="#2c2c2c"
                        strokeWidth={1}
                    >
                        <Rect width={90} height={59} stroke="none"/>
                        <Rect x={0.5} y={0.5} width={89} height={58} fill="none"/>
                    </G>
                    <Text
                        id="nummer-6"
                        data-name="nummer"
                        transform="translate(45.271 36.369)"
                        fill="#222"
                        fontSize={17}
                        fontFamily="HelveticaNeue, Helvetica Neue"
                    >
                        <TSpan x={-32.13} y={0}>
                            {"LC4.064"}
                        </TSpan>
                    </Text>
                </G>
                <G
                    id="Path_40"
                    data-name="Path 40"
                    transform="translate(138.213 387.238)"
                    fill="#ebe3dc"
                >
                    <Path
                        d="M 21.5 21.5 L 0.5 21.5 L 0.5 0.5 L 21.5 0.5 L 21.5 21.5 Z"
                        stroke="none"
                    />
                    <Path
                        d="M 1 1 L 1 21 L 21 21 L 21 1 L 1 1 M 0 0 L 22 0 L 22 22 L 0 22 L 0 0 Z"
                        stroke="none"
                        fill="#2c2c2c"
                    />
                </G>
                <G
                    id="Path_39"
                    data-name="Path 39"
                    transform="translate(203.213 387.238)"
                    fill="#ebe3dc"
                >
                    <Path
                        d="M 22.5 21.5 L 0.5 21.5 L 0.5 0.5 L 22.5 0.5 L 22.5 21.5 Z"
                        stroke="none"
                    />
                    <Path
                        d="M 1 1 L 1 21 L 22 21 L 22 1 L 1 1 M 0 0 L 23 0 L 23 22 L 0 22 L 0 0 Z"
                        stroke="none"
                        fill="#2c2c2c"
                    />
                </G>
                <G
                    id="Path_43"
                    data-name="Path 43"
                    transform="translate(116.213 433.238)"
                    fill="#ebe3dc"
                >
                    <Path
                        d="M 131.5 58.5 L 0.5 58.5 L 0.5 0.5 L 131.5 0.5 L 131.5 58.5 Z"
                        stroke="none"
                    />
                    <Path
                        d="M 1 1 L 1 58 L 131 58 L 131 1 L 1 1 M 0 0 L 132 0 L 132 59 L 0 59 L 0 0 Z"
                        stroke="none"
                        fill="#2c2c2c"
                    />
                </G>
                <G
                    id="Path_38"
                    data-name="Path 38"
                    transform="translate(86.291 433.238)"
                    fill="#ebe3dc"
                >
                    <Path
                        d="M 30.5 58.5 L 0.4999990463256836 58.5 L 0.4999990463256836 0.5 L 30.5 0.5 L 30.5 58.5 Z"
                        stroke="none"
                    />
                    <Path
                        d="M 0.9999980926513672 1 L 0.9999980926513672 58 L 30 58 L 30 1 L 0.9999980926513672 1 M -1.9073486328125e-06 0 L 31 0 L 31 59 L -1.9073486328125e-06 59 L -1.9073486328125e-06 0 Z"
                        stroke="none"
                        fill="#2c2c2c"
                    />
                </G>
                <G id="Border" transform="translate(26.213 228.238)" fill="none">
                    <Path
                        d="M0,265V130.37H88.655V0H223.344V130.37H312V265Z"
                        stroke="none"
                    />
                    <Path
                        d="M 310 263 L 310 132.36962890625 L 223.3444976806641 132.36962890625 L 221.3444976806641 132.36962890625 L 221.3444976806641 130.36962890625 L 221.3444976806641 2 L 90.65541839599609 2 L 90.65541839599609 130.36962890625 L 90.65541839599609 132.36962890625 L 88.65541839599609 132.36962890625 L 2 132.36962890625 L 2 263 L 310 263 M 312 265 L 2.842170943040401e-14 265 L 2.842170943040401e-14 130.36962890625 L 88.65541839599609 130.36962890625 L 88.65541839599609 2.842170943040401e-14 L 223.3444976806641 2.842170943040401e-14 L 223.3444976806641 130.36962890625 L 312 130.36962890625 L 312 265 Z"
                        stroke="none"
                        fill="#2c2c2c"
                    />
                </G>
            </G>
        </Svg>
    )
}
