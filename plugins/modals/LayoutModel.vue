<!-- <template>
    <div modal=true>
        <div>
            <div v-if="visible" :data-modal="name" class="modal">
                <div 
                aria-modal="true" 
                data-reach-dialog-content="true"
                tabindex="-1"
                class="modal__mask"
                >
                <div class="model__body">
                    <slot :payload="payload" />
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VModal from './handle';
    export default{
        props: {
            // eslint-disable-next-line vue/require-default-prop
            name: {
                type: String, 
                required: true,
            }
        },
        data(){
            return{
                payload: null,
                visible: false,
            }
        },
        beforeMount() {
            // open event
            VModal.EventBus.$on('open', params => {
                if(this.name === params.name){
                    this.open(params)
                }
            })
            // close event
            VModal.EventBus.$on('close', params => {
                if(this.name === params.name){
                    this.close(params)
                }
            })
        }, 
        methods: {
            open(params){
                this.visible = true
            },
            close(params){
                this.visible = false
            }
        },
    }
</script>

<style lang="scss" scoped>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: unset;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(18, 18, 18, 0.8);
    z-index: 999;
    padding-top: 10px;
    padding-bottom: 10px;

}
</style> -->