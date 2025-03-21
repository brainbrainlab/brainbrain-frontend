uniform sampler2D pointTexture;
varying vec3 vColor;

void main() {
  vec4 textureColor = texture2D(pointTexture, gl_PointCoord);
  if (textureColor.a < 0.6) discard; // Discard pixels with low alpha
  gl_FragColor = vec4(vColor, 1.0) * textureColor;
}