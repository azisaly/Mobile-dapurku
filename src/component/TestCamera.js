import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const TestCamera = ({ initialProps }) => {
    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
        {
            toggleFacing,
            textRecognized,
            facesDetected,
            recordVideo,
            setIsRecording,
        },
    ] = useCamera(initialProps);

    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
            {/* 
            {/* <RNCamera
                ref={cameraRef}
                autoFocusPointOfInterest={autoFocusPoint.normalized}
                type={type}
                ratio={ratio}
                style={{ flex: 1, }}
                autoFocus={autoFocus}
                onTextRecognized={textRecognized}
                onFacesDetected={facesDetected} 
            /> */}

            {/* 
            <TouchableOpacity
                testID="button"
                onPress={toggleFacing}
                style={{ width: '100%', height: 45 }}>
                <Text>{type}</Text>
            </TouchableOpacity>

            {!isRecording && (
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            setIsRecording(true);
                            const data = await recordVideo();
                            console.warn(data);
                        } catch (error) {
                            console.warn(error);
                        } finally {
                            setIsRecording(false);
                        }
                    }}
                    style={{ width: '100%', height: 45 }}
                />
            )} */}

        </View>


    );
};

export default TestCamera
