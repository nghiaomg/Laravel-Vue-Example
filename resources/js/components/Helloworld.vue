
<template>

        <h1>Hello Hehe</h1>

        <div class="cards">
            <div class="card">
                <img 
                src="https://www.touchtapplay.com/wp-content/uploads/2021/04/among-us-everything-to-know-about-the-red-crewmate-1.jpg" 
                alt=""
                class="card-background">
                <div class="card-content">
                    <div class="card-title">
                        Among Us - Red
                    </div>
                    <div class="card-user">
                        <img 
                        src="https://cdn.pixabay.com/photo/2016/03/11/03/25/steve-jobs-1249665__480.jpg" 
                        alt=""
                        class="card-user-avatar"
                        >
                        <div class="card-user-info">
                            <div class="card-user-top">

                            </div>
                            <div class="card-user-name">
                                nghiaOMG
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-live">
                        <i class="bi bi-reception-4"></i>
                        <span>Online</span>
                    </div>
                    <div class="card-online">
                        1m ago
                    </div>
                </div>
            </div>
        </div>

</template>

<style>
    .cards{
        display: flex;
    }
    .card{
        border-radius: 3%;
        background-color: aqua;
        width: 25%;
        overflow: hidden;
        object-fit: fill;
    }
</style>

<script>
    export default{
        name: "Helloworld"
    }
</script>