import type { PluginListenerHandle } from '@capacitor/core';

export interface YouTubeCapacitorPlugin {
  load(options: { videoId: string }): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  seekTo(options: { seconds: number }): Promise<void>;
  setVolume(options: { volume: number }): Promise<void>;
  setNowPlaying(options: { title: string; artist: string; duration: number; artworkUrl?: string }): Promise<void>;

  addListener(
    eventName: 'youtubeStateChange',
    listenerFunc: (state: { state: string }) => void,
  ): Promise<PluginListenerHandle>;

  addListener(
    eventName: 'youtubeTimeUpdate',
    listenerFunc: (state: { currentTime: number, duration: number }) => void,
  ): Promise<PluginListenerHandle>;
}
