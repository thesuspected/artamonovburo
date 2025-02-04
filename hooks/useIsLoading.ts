import { type Ref, ref } from "vue"

export default function useIsLoading(): {
    isLoading: Ref<boolean>;
    onLoading: () => void;
    offLoading: () => void;
} {
    const isLoading = ref<boolean>(false)
    // let timer: ReturnType<typeof setTimeout>;

    const onLoading = () => {
        isLoading.value = true
    }

    const offLoading = () => {
        isLoading.value = false
    }

    return {
        isLoading,
        onLoading,
        offLoading,
    }
}
