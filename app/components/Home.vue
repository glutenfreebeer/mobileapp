<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
        
       <FlexboxLayout >
            <ListView for="item in beers">
                <v-template>
                    <StackLayout class="card" >
                        <Image :src="item.beer.beer_label" stretch="contain" />
                        <Label :text="item.beer.beer_name" />
                    </StackLayout>
                </v-template>
            </ListView>
        </FlexboxLayout>
    </Page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiService from '../services/ApiService';

@Component
export default class Home extends Vue {

    apiService?: ApiService;

    beers: any[] = [];

    get message() {
        return "Blank {N}-Vue app";
    }

    mounted() {
        this.apiService = new ApiService();
        this.apiService.getAll().then((response: any)=>{
            console.log(response.data);  
            this.beers = response.data
        });
    }
}
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
