import { computed, type Ref } from "vue"

export default function useScreenController(): {
    isDesktop: Ref<boolean>;
} {
    const quasar = useQuasar()
    const isDesktop = computed(() => quasar.screen.gt.sm)

    return {
        isDesktop,
    }
}
