<template>
    <div class="py-10">
        <ProfileUser />
        <SocialMedia />
        <AddressLocation />

    </div>
</template>

<script>
import ProfileUser from '~/components/ProfileUser.vue';
import SocialMedia from '~/components/SocialMedia.vue';
import AddressLocation from '~/components/AddressLocation.vue';

export default {
    components: {
        ProfileUser,
        SocialMedia,
        AddressLocation,
        
    }
}
</script>

<style lang="scss" scoped></style>