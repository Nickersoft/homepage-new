<script lang="ts">
  import {
    ShaderMount as ShaderMountVanilla,
    type ShaderMountUniforms,
  } from '@paper-design/shaders';

  interface Props {
    fragmentShader: string;
    uniforms: ShaderMountUniforms;
    speed?: number;
    frame?: number;
    minPixelRatio?: number;
    maxPixelCount?: number;
    mipmaps?: string[];
    webGlContextAttributes?: WebGLContextAttributes;
    width?: string | number;
    height?: string | number;
    style?: string;
    class?: string;
  }

  let {
    fragmentShader,
    uniforms,
    speed = 0,
    frame = 0,
    minPixelRatio,
    maxPixelCount,
    mipmaps,
    webGlContextAttributes,
    width,
    height,
    style,
    class: className,
  }: Props = $props();

  let container: HTMLDivElement;
  let mount: ShaderMountVanilla | undefined;

  let mergedStyle = $derived.by(() => {
    const parts: string[] = [];
    
    if (width !== undefined) {
      const w = typeof width === 'number' ? `${width}px` : width;
      parts.push(`width: ${w}`);
    }
    
    if (height !== undefined) {
      const h = typeof height === 'number' ? `${height}px` : height;
      parts.push(`height: ${h}`);
    }

    if (style) parts.push(style);

    return parts.length > 0 ? parts.join('; ') : undefined;
  });

  // Initialize and dispose the ShaderMount
  $effect(() => {
    mount = new ShaderMountVanilla(
      container,
      fragmentShader,
      uniforms,
      webGlContextAttributes,
      speed,
      frame,
      minPixelRatio,
      maxPixelCount,
      mipmaps,
    );
    
    return () => {
      mount?.dispose();
      mount = undefined;
    };
  });

  // Update uniforms reactively
  $effect(() => {
    mount?.setUniforms(uniforms);
  });

  $effect(() => {
    mount?.setSpeed(speed);
  });

  $effect(() => {
    mount?.setFrame(frame);
  });

  $effect(() => {
    mount?.setMaxPixelCount(maxPixelCount);
  });

  $effect(() => {
    mount?.setMinPixelRatio(minPixelRatio);
  });
</script>

<div bind:this={container} class={className} style={mergedStyle}></div>
