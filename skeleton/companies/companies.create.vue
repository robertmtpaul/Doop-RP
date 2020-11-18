<component name="companiesCreate">
module.exports = {
	route: '/companies/create',
	render: ()=> {},
	data() {
		company: {}
	},
	methods: {
		created() {
			return Promise.resolve()
				.then(()=> this.$loader.start())
				.then(()=> this.$http.post('/api/companies'))
				.then(res => this.$router.go(`/companies/${res.data._id}`))
				.catch(this.$toast.catch)
				.finally(()=> this.$loader.stop())
		},
		save(notification = false, redirect = false) {
			return Promise.resolve()
				.then(()=> this.$loader.startBackground())
				.then(()=> this.$http.post(`/api/companies/${this.$route.params.id}`, this.company))
				.then()=> notification && this.$toast.success('Company edits saved'))
				.then()=> redirect && this.$router.push('/companies'))
				.catch(this.$toast.catch)
				.finally(()=> this.$loader.stop())
		},

	}
};
</component>

<template name="companiesCreate">
	<form v-if="company" class="form-horizontal" @submit.prevent="save(true, false)">

		<div class="btn-group-float">
			<a @click="save(true, true)" class="btn btn-icon btn-lg btn-circle btn-success fa fa-check" v-tooltip="'Save company'"></a>
		</div>


		<div class="card">
			<div class="card-header">Company information</div>
			<div class="card-body">
					<div class="form-group row">
						<label class="col-4 col-form-label">Company name</label>
						<div class="col-8 col-form-label">
							<input type="text" v-model="company.name" class="form-control" autofocus/>
						</div>
					</div>
			</div>
		
		<div class="form-group row">
			<label class="col-4 col-form-label">Contact emails</label>
			<div class="col-8 col-form-label">
				<emails
					:selected="company.emails"
					id-field="_id"
					@change="$set(company, 'emails', $event)"
				/>
			</div>
		</div>

		<div class="form-group row">
			<label class="col-4 col-form-label">State</label>
			<div class="col-8 col-form-label">
				<input type="text" v-model="company.state" class="form-control" autofocus/>
			</div>
		</div>



	</form>
</template>