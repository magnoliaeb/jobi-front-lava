<template>
    <div>
        <v-row>
            <v-col cols="12" class="d-flex justify-end align-center">
                <v-text-field label="Search here..." solo prepend-inner-icon="mdi-magnify"></v-text-field>
                <v-btn icon>
                    <v-icon>mdi-bell</v-icon>
                    <v-badge color="red" content="1" overlap>
                        <template v-slot:badge>
                            <span></span>
                        </template>
                    </v-badge>
                </v-btn>
                <v-btn color="primary" dark @click="postJob">
                    Post a Job
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>