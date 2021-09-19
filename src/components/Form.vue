<template>
    <p>Olá {{ visitor }}</p>
    
    <div class="container">
        <div class="row content">
            <div class="col-md-6">
                <h3 class="signup-text mb-3">Cadastre-se</h3>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="user">Usuário</label>
                        <input type="user" name="usuario" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senha">Confimar senha</label>
                        <input type="password" name="senha" class="form-control">
                    </div>
                    <button class="btn btn-class">Cadastrar-se</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Form",
    props: {
        visitor: String
    }
}
</script>

<style scoped>
.content{
    margin: 8%;
    background-color: #261132;
    padding: 4rem 1rem 4rem 1rem;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0, .05);
    border-radius: 10px;
}
.signup-text{
    font-style: normal;
    
}
.form-control{
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    border-color: #261132;
    border-style: solid;
    padding: 1px;
    color: #495057;
    height: auto;
    border-radius: 15px;
    background-color: #fff;
    background-clip: padding-box;
    text-indent: 12px;
}
.form-control:focus{
    color: #495057;
    background-color: #fff;
    outline: 0;
    box-shadow: none;
}
.btn-class{
    border-color: #261132;
    color: #261132;
}
.btn-class:hover{
    background-color: #261132;
    color: #fff;
}
</style>