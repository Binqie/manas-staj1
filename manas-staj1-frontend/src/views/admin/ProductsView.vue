<template>
    <div class="products">
        <form>
            <div class="grid">
                <div class="mb-3 g-col-6">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 g-col-6">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 g-col-6">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 g-col-6">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div class="grid">
            <div class="g-col-6">.g-col-6</div>
            <div class="g-col-6">.g-col-6</div>
            <div class="g-col-6">.g-col-6</div>
            <div class="g-col-6">.g-col-6</div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    form {
        display: block;
    }
</style>