import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shiba = () => {
  const newState = useSnapshot(state);
  const { nodes, materials } = useGLTF('/cute_shiba.glb');

  const logoTexture = useTexture(newState.logoDecal);
  const fullTexture = useTexture(newState.fullDecal);

  useFrame(( delta) => easing.dampC(materials.default.color, materials.default.color, 0.25, delta));

  const stateString = JSON.stringify(newState);
  console.log(nodes)
  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.Group18985_default_0.geometry}
        material={materials.default}
        material-roughness={1}
        dispose={null}
        rotation={[5, 0, 0]}
        scale={0.4}
        position={[0.5, -0.2, 0]}
      >
        {newState.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.5}
            map={fullTexture}
          />
        )}

        {newState.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.05}
            map={logoTexture}
            mapAnisotropy={fullTexture ? 16 : undefined}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Box002_default_0.geometry}
        material={materials.default}
        material-roughness={1}
        dispose={null}
        rotation={[5, 0, 0]}
        scale={0.4}
        position={[0.5, -0.2, 0]}
      >
        {newState.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.5}
            map={fullTexture}
          />
        )}

        {newState.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.05}
            map={logoTexture}
            mapAnisotropy={fullTexture ? 16 : undefined}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Object001_default_0.geometry}
        material={materials.default}
        material-roughness={1}
        dispose={null}
        rotation={[5, 0, 0]}
        scale={0.4}
        position={[0.5, -0.2, 0]}
      >
        {newState.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.5}
            map={fullTexture}
          />
        )}

        {newState.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.05}
            map={logoTexture}
            mapAnisotropy={fullTexture ? 16 : undefined}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shiba
