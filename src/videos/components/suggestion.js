import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

function Suggestion(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image
                        style={styles.cover}
                        source={{
                            uri: props.medium_cover_image
                        }}
                    />                    
                </View>

                <View style={styles.right}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.genreText}>{props.genres[0]}</Text>
                    <Text style={styles.year}>{props.year}</Text>
                    <Text style={styles.rating}>{props.rating} Estrellas</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    genreText: {
        fontSize: 11,
    },
    cover: {
        height: 120,
        width: 80,
        resizeMode: 'contain'
    },
    right: {
        paddingLeft: 15,
        paddingVertical: 7,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    }

})

export default Suggestion