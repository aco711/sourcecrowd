import { AsyncStorage } from 'react-native';
import makerbotData from '../assets/data/makerbot.json';

class API {
    constructor() {
        this.data = makerbotData;
    }

    fetch() {
        return this.data;
    }

    addPost(post) {
        this.data.posts.push(post);
        this.updateDataStore();
    }

    addReply(post, reply) {
        post.replies.push(reply);
        this.updateDataStore();
    }

    async updateDataStore() {
        try {
            AsyncStorage.setItem('appData', JSON.stringify(this.data));
        } catch (err) {
            console.error(err);
        }
    }
};

export default new API();