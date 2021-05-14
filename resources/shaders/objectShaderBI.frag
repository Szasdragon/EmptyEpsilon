//Simple per-pixel light shader.

const vec4 light_position = vec4(20000., 20000., 20000., 1.0);

uniform sampler2D baseMap;
uniform sampler2D illuminationMap;

varying vec3 normal;
varying vec3 position;

void main()
{
	vec3 lightDir = normalize(vec3(light_position) - position);
	vec3 n = normalize(normal);
	float intensity = max(0.1, dot(lightDir, n));
	
	vec4 base = texture2D(baseMap, gl_TexCoord[0].st);
	vec4 illumination = texture2D(illuminationMap, gl_TexCoord[0].st);
	
	gl_FragColor = (base - illumination) * intensity + illumination;
}
