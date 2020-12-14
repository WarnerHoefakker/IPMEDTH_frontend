import * as React from "react";
import {View} from 'react-native';
import Svg, {G, Path, Text, TSpan, Rect} from "react-native-svg";
import Legend from "./Legend"

export default function LC7(props) {
    //{props.state && props.state['LC7014'] ? colors[props.state['LC7014']] : "#cbe2eb"}

    const colors = {
        green: '#CBE2EB',
        orange: '#8EBFD2',
        red: '#579FBD'
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
                    id="Plattegrond_7"
                    data-name="Plattegrond 7"
                    transform="translate(-26.212 -228.238)"
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
                    <G id="lc7006" transform="translate(58.438 433.238)">
                        <G id="achtergrond"
                           fill={props.state && props.state['LC7006'] ? colors[props.state['LC7006']] : "#cbe2eb"}>
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
                            transform="translate(29.775 47.369)"
                            fill="#222"
                            fontSize={12}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-22.68} y={0}>
                                {"LC7.006"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc7010" transform="translate(26.854 433.238)">
                        <G id="achtergrond-2" data-name="achtergrond"
                           fill={props.state && props.state['LC7010'] ? colors[props.state['LC7010']] : "#cbe2eb"}>
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
                                {"LC7.010"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc7044" transform="translate(115.63 228.854)">
                        <G
                            id="achtergrond-3"
                            data-name="achtergrond"
                            transform="translate(-0.418 0.384)"
                            fill={props.state && props.state['LC7044'] ? colors[props.state['LC7044']] : "#cbe2eb"}
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
                                {"LC7.044"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc7050" transform="translate(247.241 358.604)">
                        <G
                            id="achtergrond-4"
                            data-name="achtergrond"
                            transform="translate(0.271)"
                            fill={props.state && props.state['LC7050'] ? colors[props.state['LC7050']] : "#cbe2eb"}
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
                            id="nummer-4"
                            data-name="nummer"
                            transform="translate(44.971 16.634)"
                            fill="#222"
                            fontSize={13}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-24.57} y={0}>
                                {"LC7.050"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc7025" transform="translate(163.854 310.009)">
                        <G id="achtergrond-5" data-name="achtergrond"
                           fill={props.state && props.state['LC7025'] ? colors[props.state['LC7025']] : "#cbe2eb"}>
                            <Path
                                d="M 35.76123428344727 62.48291397094727 L 0.5000052452087402 62.48291397094727 L 0.5000052452087402 0.5000050663948059 L 35.76123428344727 0.5000050663948059 L 35.76123428344727 62.48291397094727 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 0.9999961853027344 0.9999961853027344 L 0.9999961853027344 61.98290634155273 L 35.26122665405273 61.98290634155273 L 35.26122665405273 0.9999961853027344 L 0.9999961853027344 0.9999961853027344 M -3.814697265625e-06 -3.814697265625e-06 L 36.26122665405273 -3.814697265625e-06 L 36.26122665405273 62.98290634155273 L -3.814697265625e-06 62.98290634155273 L -3.814697265625e-06 -3.814697265625e-06 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                        <Text
                            id="nummer-5"
                            data-name="nummer"
                            transform="translate(14.439 31.402) rotate(90)"
                            fill="#222"
                            fontSize={12}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-22.68} y={0}>
                                {"LC7.025"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="leeg4" transform="translate(261.854 380.238)">
                        <G
                            id="achtergrond-6"
                            data-name="achtergrond"
                            transform="translate(-1.705)"
                            fill="#d8e0e3"
                        >
                            <Path
                                d="M 18.64306259155273 26.31640243530273 L 0.5000032186508179 26.31640243530273 L 0.5000032186508179 0.5000030994415283 L 18.64306259155273 0.5000030994415283 L 18.64306259155273 26.31640243530273 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1.000003814697266 1.000003814697266 L 1.000003814697266 25.81640243530273 L 18.14306259155273 25.81640243530273 L 18.14306259155273 1.000003814697266 L 1.000003814697266 1.000003814697266 M 3.814697265625e-06 3.814697265625e-06 L 19.14306259155273 3.814697265625e-06 L 19.14306259155273 26.81640243530273 L 3.814697265625e-06 26.81640243530273 L 3.814697265625e-06 3.814697265625e-06 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                    </G>
                    <G id="lc7024" transform="translate(26.512 358.604)">
                        <G
                            id="achtergrond-7"
                            data-name="achtergrond"
                            transform="translate(31.506)"
                            fill={props.state && props.state['LC7024'] ? colors[props.state['LC7024']] : "#cbe2eb"}
                        >
                            <Path
                                d="M 57.99365615844727 48.15625381469727 L 0.5000061988830566 48.15625381469727 L 0.5000061988830566 0.5000050067901611 L 57.99365615844727 0.5000050067901611 L 57.99365615844727 48.15625381469727 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 0.9999961853027344 0.9999961853027344 L 0.9999961853027344 47.65624618530273 L 57.49364471435547 47.65624618530273 L 57.49364471435547 0.9999961853027344 L 0.9999961853027344 0.9999961853027344 M -3.814697265625e-06 -3.814697265625e-06 L 58.49364471435547 -3.814697265625e-06 L 58.49364471435547 48.65624618530273 L -3.814697265625e-06 48.65624618530273 L -3.814697265625e-06 -3.814697265625e-06 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                        <Text
                            id="nummer-6"
                            data-name="nummer"
                            transform="translate(55.7 15.634)"
                            fill="#222"
                            fontSize={11}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-20.79} y={0}>
                                {"LC7.024"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="leeg3" transform="translate(87.265 380.238)">
                        <G id="achtergrond-8" data-name="achtergrond" fill="#d8e0e3">
                            <Path
                                d="M 16.11108207702637 26.31635475158691 L 0.5000019669532776 26.31635475158691 L 0.5000019669532776 0.5000045299530029 L 16.11108207702637 0.5000045299530029 L 16.11108207702637 26.31635475158691 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1.000001907348633 0.9999942779541016 L 1.000001907348633 25.81634521484375 L 15.61108207702637 25.81634521484375 L 15.61108207702637 0.9999942779541016 L 1.000001907348633 0.9999942779541016 M 1.9073486328125e-06 -5.7220458984375e-06 L 16.61108207702637 -5.7220458984375e-06 L 16.61108207702637 26.81634521484375 L 1.9073486328125e-06 26.81634521484375 L 1.9073486328125e-06 -5.7220458984375e-06 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                    </G>
                    <G id="leeg2" transform="translate(58.038 380.238)">
                        <G id="achtergrond-9" data-name="achtergrond" fill="#d8e0e3">
                            <Path
                                d="M 29.67480087280273 26.52240371704102 L 0.5000013709068298 26.52240371704102 L 0.5000013709068298 0.5000028014183044 L 29.67480087280273 0.5000028014183044 L 29.67480087280273 26.52240371704102 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1.000001907348633 1.000001907348633 L 1.000001907348633 26.02240371704102 L 29.17480087280273 26.02240371704102 L 29.17480087280273 1.000001907348633 L 1.000001907348633 1.000001907348633 M 1.9073486328125e-06 1.9073486328125e-06 L 30.17480087280273 1.9073486328125e-06 L 30.17480087280273 27.02240371704102 L 1.9073486328125e-06 27.02240371704102 L 1.9073486328125e-06 1.9073486328125e-06 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                    </G>
                    <G id="lc7060" transform="translate(278.438 433.238)">
                        <G id="achtergrond-10" data-name="achtergrond"
                           fill={props.state && props.state['LC7060'] ? colors[props.state['LC7060']] : "#cbe2eb"}>
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
                            id="nummer-7"
                            data-name="nummer"
                            transform="translate(29.775 47.369)"
                            fill="#222"
                            fontSize={12}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-22.68} y={0}>
                                {"LC7.060"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="lc7064" transform="translate(246.854 433.238)">
                        <G id="achtergrond-11" data-name="achtergrond"
                           fill={props.state && props.state['LC7064'] ? colors[props.state['LC7064']] : "#cbe2eb"}>
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
                            id="nummer-8"
                            data-name="nummer"
                            transform="translate(12.475 29.402) rotate(90)"
                            fill="#222"
                            fontSize={12}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-22.68} y={0}>
                                {"LC7.064"}
                            </TSpan>
                        </Text>
                    </G>
                    <G id="leeg1" transform="translate(278.02 380.238)">
                        <G
                            id="achtergrond-12"
                            data-name="achtergrond"
                            transform="translate(0.271)"
                            fill="#d8e0e3"
                        >
                            <Path
                                d="M 30.50024032592773 26.5224609375 L 0.5000011324882507 26.5224609375 L 0.5000011324882507 0.5000014305114746 L 30.50024032592773 0.5000014305114746 L 30.50024032592773 26.5224609375 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1.000001907348633 1.000001907348633 L 1.000001907348633 26.0224609375 L 30.00024032592773 26.0224609375 L 30.00024032592773 1.000001907348633 L 1.000001907348633 1.000001907348633 M 1.9073486328125e-06 1.9073486328125e-06 L 31.00024032592773 1.9073486328125e-06 L 31.00024032592773 27.0224609375 L 1.9073486328125e-06 27.0224609375 L 1.9073486328125e-06 1.9073486328125e-06 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                    </G>
                    <G id="lc7020" transform="translate(26.854 358.238)">
                        <G id="achtergrond-13" data-name="achtergrond"
                           fill={props.state && props.state['LC7020'] ? colors[props.state['LC7020']] : "#cbe2eb"}>
                            <Path
                                d="M 31.93756484985352 48.5224609375 L 0.5000043511390686 48.5224609375 L 0.5000043511390686 0.5000004768371582 L 31.93756484985352 0.5000004768371582 L 31.93756484985352 48.5224609375 Z"
                                stroke="none"
                            />
                            <Path
                                d="M 1.000003814697266 1 L 1.000003814697266 48.0224609375 L 31.43756484985352 48.0224609375 L 31.43756484985352 1 L 1.000003814697266 1 M 3.814697265625e-06 0 L 32.43756484985352 0 L 32.43756484985352 49.0224609375 L 3.814697265625e-06 49.0224609375 L 3.814697265625e-06 0 Z"
                                stroke="none"
                                fill="#2c2c2c"
                            />
                        </G>
                        <Text
                            id="nummer-9"
                            data-name="nummer"
                            transform="translate(12.475 24.402) rotate(90)"
                            fill="#222"
                            fontSize={9}
                            fontFamily="HelveticaNeue, Helvetica Neue"
                        >
                            <TSpan x={-17.01} y={0}>
                                {"LC7.020"}
                            </TSpan>
                        </Text>
                    </G>
                    <G
                        id="Path_40"
                        data-name="Path 40"
                        transform="translate(138.213 387.238)"
                        fill="#d8e0e3"
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
                        fill="#d8e0e3"
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
                        fill="#d8e0e3"
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
                        fill="#d8e0e3"
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
                    <G
                        id="Path_47"
                        data-name="Path 47"
                        transform="translate(278.292 433.238)"
                        fill="#d8e0e3"
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
                    <G id="Border" transform="translate(26.212 228.238)" fill="none">
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
