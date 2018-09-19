<template>
    <section class="content-wrapper" style="min-height: 960px;">
    <section class="content-header">
      <h1>
        News
        <small>Stop Lie</small>
      </h1>
    </section>

          <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Create</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group">
                                    <label for="name_imf">Name_Imf</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="name_imf"
                                            placeholder="Enter Name_Imf"
                                            :value="item.name_imf"
                                            @input="updateName_Imf"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="Imf">Imf</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="imf"
                                            placeholder="Enter Imf"
                                            :value="item.imf"
                                            @input="updateImf"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="img">Img</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            name="img"
                                            placeholder="Enter Password"
                                            :value="item.img"
                                            @input="updateImg"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="user">Poster_Name</label>
                                    <v-select
                                            name="user"
                                            label="name"
                                            @input="updateUser"
                                            :value="item.user"
                                            :options="usersAll"
                                            />
                                </div>
                            </div>

                            <div class="box-footer">
                                <vue-button-spinner
                                        class="btn btn-primary btn-sm"
                                        :isLoading="loading"
                                        :disabled="loading"
                                        >
                                    Save
                                </vue-button-spinner>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
</section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            // Code...
        }
    },
    computed: {
        ...mapGetters('NewsSingle', ['item', 'loading', 'usersAll'])
    },
    created() {
        this.fetchUsersAll()
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('NewsSingle', ['storeData', 'resetState', 'setName_Imf', 'setImf', 'setImg', 'setUser', 'fetchUsersAll']),
        updateName_Imf(e) {
            this.setName_Imf(e.target.value)
        },
        updateImf(e) {
            this.setImf(e.target.value)
        },
        updateImg(e) {
            this.setImg(e.target.value)
        },
        updateUser(value) {
            this.setUser(value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'news.index' })
                    this.$eventHub.$emit('create-success')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
</script>


<style scoped>

</style>
