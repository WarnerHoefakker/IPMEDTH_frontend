import * as React from "react";
import {View} from 'react-native';
import Svg, {G, Path, Text, TSpan, Rect} from "react-native-svg";
import Legend from "./Legend"

export default function LC5(props) {
    //{props.state && props.state['LC5014'] ? colors[props.state['LC5014']] : "#d9dbf3"}

    const colors = {
        green: '#D9DBF3',
        orange: '#B3B8E7',
        red: '#848CD9'
    };

    return (
        <View>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={312}
                height={265}
                viewBox="0 0 312 265"
                {...props}
            >
                <G
                    id="Plattegrond_5"
                    data-name="Plattegrond 5"
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
                    <G id="lc5006" transform="translate(58.438 433.238)">
                        <G id="achtergrond" fill={props.state && props.state['LC5006'] ? colors[props.state['LC5006']] : "#d9dbf3"}>
                            <Path
                                d="M 58.27495956420898 59.25341796875 L 0.4999997913837433 59.25341796875 L 0.4999997913837433 0.4999989867210388 L 58.27495956420898 0.4999989867210388 L 58.27495956420898 59.25341796875 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1 1 L 1 58.75341796875 L 57.77495956420898 58.75341796875 L 57.77495956420898 1 L 1 1 M 0 0 L 58.77495956420898 0 L 58.77495956420898 59.75341796875 L 0 59.75341796875 L 0 0 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                        <Text
                            id="nummer"
                            transform="translate(29.775 48.369)"
                            fill="#222"
                            fontSize={12}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-22.68} y={0}>
                                {"LC5.006"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc5010" transform="translate(26.854 433.238)">
                        <G id="achtergrond-2" data-name="achtergrond" fill={props.state && props.state['LC5010'] ? colors[props.state['LC5010']] : "#d9dbf3"}>
                            <Path
                                d="M 31.93756484985352 59.25341796875 L 0.5000043511390686 59.25341796875 L 0.5000043511390686 0.4999989867210388 L 31.93756484985352 0.4999989867210388 L 31.93756484985352 59.25341796875 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1.000003814697266 1 L 1.000003814697266 58.75341796875 L 31.43756484985352 58.75341796875 L 31.43756484985352 1 L 1.000003814697266 1 M 3.814697265625e-06 0 L 32.43756484985352 0 L 32.43756484985352 59.75341796875 L 3.814697265625e-06 59.75341796875 L 3.814697265625e-06 0 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                        <Text
                            id="nummer-2"
                            data-name="nummer"
                            transform="translate(12.475 29.402) rotate(90)"
                            fill="#222"
                            fontSize={12}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-22.68} y={0}>
                                {"LC5.010"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc5044" transform="translate(115.63 228.854)">
                        <G
                            id="achtergrond-3"
                            data-name="achtergrond"
                            transform="translate(-0.418 0.384)"
                            fill={props.state && props.state['LC5044'] ? colors[props.state['LC5044']] : "#d9dbf3"}
                            stroke="#2c2c2c"
                            strokeWidth={1}
                        >
                            <Rect width={134} height={131.3} stroke="none" />
                            <Rect x={0.5} y={0.5} width={133} height={130.3} fill="none" />
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
                                {"LC5.044"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc5024" transform="translate(26.854 358.604)">
                        <G id="achtergrond-4" data-name="achtergrond" fill={props.state && props.state['LC5024'] ? colors[props.state['LC5024']] : "#d9dbf3"}>
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
                                {"LC5.024"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc5050" transform="translate(247.241 358.604)">
                        <G
                            id="achtergrond-5"
                            data-name="achtergrond"
                            transform="translate(0.271)"
                            fill={props.state && props.state['LC5050'] ? colors[props.state['LC5050']] : "#d9dbf3"}
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
                                {"LC5.050"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc5064" transform="translate(246.941 432.869)">
                        <G
                            id="achtergrond-6"
                            data-name="achtergrond"
                            transform="translate(0.271 0.369)"
                            fill={props.state && props.state['LC5064'] ? colors[props.state['LC5064']] : "#d9dbf3"}
                            stroke="#2c2c2c"
                            strokeWidth={1}
                        >
                            <Rect width={90} height={59} stroke="none" />
                            <Rect x={0.5} y={0.5} width={89} height={58} fill="none" />
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
                                {"LC5.064"}
                            </TSpan>
                        </Text>
                    </G>
                    <G
                        id="Path_40"
                        data-name="Path 40"
                        transform="translate(138.213 387.238)"
                        fill="#EDEDED"
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
                        fill="#EDEDED"
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
                        fill="#EDEDED"
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
                        transform="translate(58.291 433.238)"
                        fill="#EDEDED"
                    >
                        <Path
                            d="M 30.5 29.5 L 0.4999990463256836 29.5 L 0.4999990463256836 0.5 L 30.5 0.5 L 30.5 29.5 Z"
                            stroke="none"
                        />
                        <Path
                            d="M 0.9999980926513672 1 L 0.9999980926513672 29 L 30 29 L 30 1 L 0.9999980926513672 1 M -1.9073486328125e-06 0 L 31 0 L 31 30 L -1.9073486328125e-06 30 L -1.9073486328125e-06 0 Z"
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
            <Legend colors={colors} />
        </View>

    )
}
