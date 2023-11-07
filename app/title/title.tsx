import { useEffect, useState } from 'react';
import { WebviewWindow } from '@tauri-apps/api/window';
import { TitleBar, TitleButton, TitleButtonClose } from "./style";
import { Icon } from '@iconify/react';

const Title = () => {
  const [window, setWindow] = useState<WebviewWindow>()

  useEffect(() => {
    (async function() {
      const window = (await import('@tauri-apps/api/window')).appWindow
      setWindow(window)
    })()
  }, [])

  return (
    <TitleBar data-tauri-drag-region>
      <TitleButton onClick={() => window?.minimize()}>
        <Icon icon="material-symbols:minimize" color="#6b6b6b" />
      </TitleButton>
      <TitleButton onClick={() => window?.toggleMaximize()}>
        <Icon icon="mdi:window-maximize" color="#6b6b6b" />
      </TitleButton>
      <TitleButtonClose onClick={() => window?.close()}>
        <Icon icon="material-symbols:close" color="#6b6b6b" />
      </TitleButtonClose>
    </TitleBar>
  );
}

export default Title;
