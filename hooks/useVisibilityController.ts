import { type Ref, ref } from 'vue'

export default function useVisibilityController(
    {
        defaultValue,
    }: {
        defaultValue?: boolean;
    } = {}): {
    isVisible: Ref<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
} {
    const isVisible = ref<boolean>(defaultValue ?? false)

    const open = () => {
        isVisible.value = true
    }

    const close = () => {
        isVisible.value = false
    }

    const toggle = () => {
        isVisible.value = !isVisible.value
    }

    return {
        isVisible,
        open,
        close,
        toggle,
    }
}
