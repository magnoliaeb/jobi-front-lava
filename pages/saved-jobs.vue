<template>
    <section class="py-10">
        <v-row class="justify-space-between">

            <v-col cols="12" md="auto">
                <h1>Saved Candidate</h1>
            </v-col>
            <v-col cols="12" md="3" class="d-flex justify-end">
                <v-select :items="sortOptions" label="Short by" v-model="selectedSort" solo></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" v-for="candidate in candidates" :key="candidate.id">
                <v-card>
                    <v-row align="center">
                        <v-col cols="1">
                            <v-avatar size="56">
                                <img :src="candidate.photo" alt="Profile Photo">
                            </v-avatar>
                        </v-col>
                        <v-col cols="3">
                            <div class="font-weight-bold">{{ candidate.name }}</div>
                            <div class="text--secondary">{{ candidate.occupation }}</div>
                        </v-col>
                        <v-col cols="2">
                            <div>Salary</div>
                            <div class="font-weight-bold">{{ candidate.salary }}</div>
                        </v-col>
                        <v-col cols="2">
                            <div>Location</div>
                            <div class="font-weight-bold">{{ candidate.location }}</div>
                        </v-col>
                        <v-col cols="2">
                            <v-chip-group>
                                <v-chip v-for="skill in candidate.skills" :key="skill" color="green" class="ma-1">{{
                                    skill }}</v-chip>
                            </v-chip-group>
                        </v-col>
                        <v-col cols="2" class="d-flex justify-end">
                            <v-btn icon>
                                <v-icon>mdi-eye</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <v-pagination v-model="page" :length="totalPages"></v-pagination>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    data() {
        return {
            sortOptions: ['Newest', 'Oldest', 'Highest Salary', 'Lowest Salary'],
            selectedSort: 'Newest',
            candidates: [
                {
                    id: 1,
                    name: 'Shofie Ana',
                    occupation: 'Artist',
                    salary: '$30k-$50k/yr',
                    location: 'New York, US',
                    skills: ['Design', 'UI', 'Digital'],
                    photo: 'path/to/photo1.jpg'
                },
                {
                    id: 2,
                    name: 'Riad Mahfuz',
                    occupation: 'Telemarketing & Sales',
                    salary: '$30k-$50k/yr',
                    location: 'Manchester, UK',
                    skills: ['Design', 'UI', 'Digital'],
                    photo: 'path/to/photo2.jpg'
                },
                // ...más candidatos
            ],
            page: 1,
            totalPages: 7
        };
    }
};
</script>