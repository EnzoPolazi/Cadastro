<template>
    <div class="container">
        <div class="row content">
            <div class="col">
                <h3 class="signup-text mb-3">Cadastre-se</h3>
                <form>
                    <div class="form-group">
                        <label for="user">Nome</label>
                        <input type="user" name="nome" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" class="form-control">
                    </div>
                    <h5>Endereço:</h5>
                    <div class="row content-address">
                        <div class="col">
                            <div class="form-group">
                                <label for="pais">País</label>
                                <input type="text" name="pais" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="municipio">Município</label>
                                <input type="text" name="municipio" class="form-control">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="estado">Estado</label>
                                <input type="text" name="estado" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="cep">CEP</label>
                                <input type="text" name="cep" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-9 form-group">
                            <label for="rua">Rua</label>
                            <input type="text" name="rua" class="form-control">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="numero">Número</label>
                            <input type="text" name="numero" class="form-control">
                        </div>
                        <div class="col form-group">
                            <label for="complemento">Complemento</label>
                            <input type="text" name="complemento" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="pis">PIS</label>
                        <input type="text" name="pis" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
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
    name: "Form"
}
</script>

<style scoped>
.content{
    color: #000000;
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem 1rem 2rem 1rem;
    box-shadow: 0px 0px 10px 10px rgba(0,0,0, .05);
    border-radius: 10px;
    background-color: #fff;
}
.content-address{
    margin: 10px;
    border-radius: 5px;
}
.signup-text{
    font-weight: bold;
    text-align: center;
}
.form-control{
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border-color: #261132;
    border-style: solid;
    padding: 2px;
    color: #495057;
    height: auto;
    border-radius: 7px;
    background-color: #fff;
    background-clip: padding-box;
    text-indent: 12px;
}
.form-control:focus{
    color: #132435;
    background-color: #fff;
    outline: 0;
    box-shadow: none;
}
.btn-class{
    font-weight: bold;
    display: block;
    margin: 30px auto auto auto;
    border-color: #261132;
    color: #261132;
}
.btn-class:hover{
    background-color: #261132;
    color: #fff;
}
</style>