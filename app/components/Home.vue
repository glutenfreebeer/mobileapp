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

<script>
    import ApiService from '../services/ApiService.js';

    export default {
        data(){
            return {
                api_service: '',
                beers:''
            }
        },
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        mounted(){
            this.api_service = new ApiService();
            this.api_service.getAll().then((response)=>{
                console.log(response.data);  
                this.beers = response.data
            })
            
        }
    };
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
