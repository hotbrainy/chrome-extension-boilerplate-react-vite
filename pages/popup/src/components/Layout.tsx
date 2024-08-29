import '@src/Popup.css';
import { useStorageSuspense, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { Button, ConfigProvider, Card, theme } from 'antd';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const themex = useStorageSuspense(exampleThemeStorage);
  const isLight = themex === 'light';

  const injectContentScript = async () => {
    const [tab] = await chrome.tabs.query({ currentWindow: true, active: true });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      files: ['/content-runtime/index.iife.js'],
    });
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 10,
          colorPrimary: '#00b96b',
          motion: false,
        },
        algorithm: themex == 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}>
      <Card
        title="GPTBid"
        className="rounded-none justify-center"
        extra={
          <Button
            type="text"
            onClick={exampleThemeStorage.toggle}
            shape="circle"
            icon={isLight ? <FaMoon /> : <FaSun />}
          />
        }
        actions={[
          <Button key="inject" onClick={injectContentScript}>
            Click to inject Content Script
          </Button>,
        ]}>
        <Outlet />
      </Card>
    </ConfigProvider>
  );
};

export default withErrorBoundary(withSuspense(Layout, <div> Loading ... </div>), <div> Error Occur </div>);
